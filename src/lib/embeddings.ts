// Using Hugging Face for free embeddings
const HUGGING_FACE_API_URL =
  "https://api-inference.huggingface.co/models/BAAI/bge-small-en-v1.5";

async function callHuggingFaceAPI(texts: string[]): Promise<number[][]> {
  const response = await fetch(HUGGING_FACE_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      inputs: texts,
      options: { wait_for_model: true, use_cache: false },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Hugging Face API error:", {
      status: response.status,
      statusText: response.statusText,
      error: errorText,
    });
    throw new Error(
      `Hugging Face API error: ${response.statusText} - ${errorText}`
    );
  }

  return response.json();
}

function generateChunks(input: string) {
  return input
    .split("\n\n")
    .map((chunk) => chunk.trim())
    .filter(Boolean);
}

export async function generateEmbeddings(
  value: string
): Promise<Array<{ content: string; embedding: number[] }>> {
  const chunks = generateChunks(value);

  const embeddings = await callHuggingFaceAPI(chunks);

  return embeddings.map((embedding: number[], index: number) => ({
    content: chunks[index],
    embedding,
  }));
}

export async function generateEmbedding(value: string): Promise<number[]> {
  const embeddings = await callHuggingFaceAPI([value]);
  return embeddings[0];
}
