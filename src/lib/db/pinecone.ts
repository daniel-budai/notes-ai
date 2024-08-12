import { Pinecone } from "@pinecone-database/pinecone";

const apiKey = process.env.PINECONE_API_KEY;

if (!apiKey) {
  throw new Error("Missing PINECONE_API_KEY");
}

const pinecone = new Pinecone({ apiKey }); //enviroment: "gcp-starter"

export const notesIndex = pinecone.Index("nextjs-ai-note-app");

export default pinecone;
