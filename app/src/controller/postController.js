const posts = require('../data/messages');
const emitter = require('../emitters/emitter.js');

exports.newPost = async (req, res) => {
    try{
        const postdata = await posts.get();
        const post = {
            title: req.query.title,
            user: req.query.user,
            added: new Date(),
            message: req.query.message
        }
        posts.push(post);
        emitter.emit('data', post);
        //res.status(200).json({message: 'added post successfully', data: post});
        res.redirect("/");
        
        //res.render('index', {title: 'Mini-Messageboard', message: 'Posts', items: post, NumberOfPosts: 0});
    }catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
}

exports.getPost = async (req, res) => {
    try{
        const postdata = await posts.get();
        console.log(postdata.data)
        renderer(res, postdata.data);
    }catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
}

const renderer = async(res, data) => {
    res.render('index', {title: 'Mini-Messageboard', message: 'Posts', items: data, NumberOfPosts: data.length})
}