const posts = require('../data/messages')

exports.newPost = async (req, res) => {
    try{
        const post = {
            title: req.query.title,
            user: req.query.user,
            added: new Date(),
            message: req.query.message
        }
        posts.push(post);
        //res.status(200).json({message: 'added post successfully', data: post});
        res.redirect("/");
        
    }catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
}

exports.getPost = async (req, res) => {
    try{
        const postdata = await posts.get();
        //console.log(postdata.data)
        res.render('index', {title: 'Mini-Messageboard', message: 'Posts', items: postdata.data, NumberOfPosts: postdata.data.length});
        
    }catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
}