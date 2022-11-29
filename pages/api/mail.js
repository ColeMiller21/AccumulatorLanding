import { InView } from "react-intersection-observer";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailchimp = require("@mailchimp/mailchimp_marketing");
const { API_KEY, SERVER } = process.env;
const LIST_ID = "aea7dbea99";

mailchimp.setConfig({
  apiKey: API_KEY,
  server: SERVER,
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

const getListMembers = async () => {
  const { members } = await mailchimp.lists.getListMembersInfo(LIST_ID);
  return members;
};

const createSubscriber = async (email) => {
  const response = await mailchimp.lists.addListMember(LIST_ID, {
    email_address: email,
    status: "subscribed",
  });

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  );
};

export default async function handler(req, res) {
  let { method, body, headers } = req;

  if (method !== "POST")
    return res.status(400).json({ error: "POST MALONE ONLY" });
  if (headers.secret !== process.env.API_SECRET)
    return res.status(400).json({ error: "YOU ARE NOT ALLOWED IN...SORRY" });
  //checking status in console
  await run();
  try {
    let response = await createSubscriber(body.email);
    res.status(200).json({ message: "Succesfully subscribed!" });
  } catch (err) {
    return res.status(400).json({ error: "Please try again!." });
  }
}
