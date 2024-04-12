import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        res.status(200).json({success: true})
    }
};

export default handler;
