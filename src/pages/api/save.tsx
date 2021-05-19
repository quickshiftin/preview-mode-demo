import { NextApiHandler } from "next";
import { generate as generateId } from "shortid";
import { open } from "fs/promises";

// Initialize S3 instance in module scope for re-use across requests.
const handler: NextApiHandler = async (req, res) => {
  // Generate a friendly ID for this save request:
  const snapshotId = generateId();

  // Next.js automatically handles body parsing for `POST`, `PUT`, et al.
  const contents = req.body as { id: string; innerText: string }[];

  // Upload the user-provided data to S3 under the randomly generated ID.
  //
  // We're not worried about ID collisions, but a real application probably
  // should be!
  let filehandle: any;
  try {
    let cwd = process.cwd();
    let filePath = `${cwd}/previews/${snapshotId}.json`;

    filehandle = await open(filePath, "w");
    await filehandle.writeFile(JSON.stringify(contents));
    await filehandle.close();
    console.log(`Should have saved: ${filePath}`);
  } catch (e) {
    await filehandle?.close();
  }

  // Return the `snapshotId` so the frontend can generate a sharable link.
  res.status(200);
  res.json({ snapshotId });
  res.end();
};

export const config = {
  api: {
    bodyParser: { sizeLimit: "256kb" },
  },
};

export default handler;
