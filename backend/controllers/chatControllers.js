const asyncHandler = asyncHandler("express-async-handler");

const accessChat = asyncHandler(async (req, res) => {
    const {userId} = req.body;

    if(!userId){
        res.status(400);
        throw new Error("Invalid user ID");
    }

});