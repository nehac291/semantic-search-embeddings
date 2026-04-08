import { pipeline } from '@xenova/transformers';

// 🔹 Load both models
const extractor1 = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
const extractor2 = await pipeline('feature-extraction', 'Xenova/all-mpnet-base-v2');

const documents = [
  "I love dogs",
  "Cats are cute",
  "I enjoy playing football",
  "Pets are amazing companions",
  "Technology is evolving fast"
];

const query = "I like animals";

// 🔹 Get embedding
async function getEmbedding(text, extractor) {
  const output = await extractor(text, { pooling: 'mean', normalize: true });
  return Array.from(output.data);
}

// 🔹 Cosine similarity
function cosineSimilarity(a, b) {
  const dot = a.reduce((sum, val, i) => sum + val * b[i], 0);
  const magA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
  const magB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
  return dot / (magA * magB);
}

// 🔹 Main comparison function
async function runModel(extractor, modelName) {
  const docEmbeddings = [];

  // document embeddings
  for (let doc of documents) {
    const emb = await getEmbedding(doc, extractor);
    docEmbeddings.push(emb);
  }

  // query embedding
  const queryEmbedding = await getEmbedding(query, extractor);

  // similarity
  const results = documents.map((doc, i) => ({
    text: doc,
    score: cosineSimilarity(queryEmbedding, docEmbeddings[i])
  }));

  // sort
  results.sort((a, b) => b.score - a.score);

  // top 3
  const topResults = results.slice(0, 3);

  console.log(`\n🔹 ${modelName} Results:`);
  console.log(topResults);
}

// 🔥 Run both models
await runModel(extractor1, "MiniLM (fast)");
await runModel(extractor2, "MPNet (better)");