# Semantic Search using Embeddings

## About the Project
This is a small project I built to understand how embeddings actually work in real systems.

Instead of just learning theory, I wanted to see how different embedding models behave when given the same data and query. So I compared two models:
- MiniLM (fast and lightweight)
- MPNet (more powerful but heavier)

---

## What this project does
- Takes a list of sentences (documents)
- Converts them into embeddings
- Converts a query into embedding
- Uses cosine similarity to compare them
- Returns the most relevant sentences

I ran the same process using both models to compare their outputs.

---

## Why I made this
While learning about RAG and LLMs, I realized that embeddings are the core part of retrieval.

So before jumping into full systems, I wanted to understand:
- how similarity actually works
- how model choice affects results

---

## Observations
- MiniLM is faster and works fine for simple cases
- MPNet gives slightly better semantic results
- MPNet ranked "Pets are amazing companions" higher, which makes more sense conceptually
- But it also included one irrelevant result sometimes

So it's clear that:
- bigger model ≠ perfect
- and there is always a trade-off

---

## Tech used
- Node.js
- @xenova/transformers (local embeddings)

---

## How to run
1. Install dependencies:
   npm install

2. Run the file:
   node index.js

(First run may take time as models download)

---

## Example Query

Query: "I like animals"

Top Results:
- I love dogs
- Cats are cute
- Pets are amazing companions

## Limitations
- Very small dataset
- No UI
- No real-world integration yet

---

## What I plan next
- Use larger data (like PDFs)
- Build full RAG pipeline
- Add backend + API
- Maybe deploy it

---


## Author
Neha
