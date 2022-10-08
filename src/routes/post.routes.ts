import { Router } from 'express'
import {getPosts,createPost,getPost,deletPost,updatePost} from '../controllers/post.controller'

const router=Router();


router.route('/')
    .get(getPosts)
    .post(createPost);

router.route('/:postId')
    .get(getPost)
    .delete(deletPost)
    .put(updatePost)
export default router;