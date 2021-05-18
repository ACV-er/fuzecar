<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    //
    /**
     * @api {post} /api/post 发布博客
     * @apiGroup 博客
     * @apiVersion 1.0.0
     *
     * @apiDescription 发布博客，登陆后可操作
     *
     * @apiParam {String} oid        订单id
     * @apiParam {String} title      标题
     * @apiParam {String} content    内容
     *
     * @apiSuccess {Number} code      状态码，0：请求成功
     * @apiSuccess {String} message   提示信息
     * @apiSuccess {Object} data      后端参考信息，前端无关
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":35}
     *
     *
     */
    /**
     * @param Request $request
     * @return array|string
     */
    public function publish(Request $request)
    {
        $data = $request->only(["oid", "title", "content"]);
        $rel = Post::create($data["oid"], $data["title"], $data["content"]);
        if ($rel != 0) return $rel;

        return msg(0, __LINE__);
    }

    /**
     * @api {get} /api/posts 获取博客列表
     * @apiGroup 博客
     * @apiVersion 1.0.0
     *
     * @apiDescription 获取博客列表
     *
     * @apiSuccess {Number} code      状态码，0：请求成功
     * @apiSuccess {String} message   提示信息
     * @apiSuccess {Array} data       博客列表
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":[]}
     *
     *
     */
    /**
     * @param Request $request
     * @return array|string
     */
    public function list(Request $request)
    {
        return msg(0, Post::query()->select("posts.*", "users.nickname as nickname", "users.avatar as avatar")
            ->join("users", "posts.publisher", "=", "users.id")
            ->orderBy('updated_at', 'desc')->get()->toArray());
    }

    /**
     * @api {post} /api/post/:id/like 点赞博客
     * @apiGroup 博客
     * @apiVersion 1.0.0
     *
     * @apiDescription 点赞博客
     * 
     * @apiParam {Number} id        博客id，url参数
     *
     * @apiSuccess {Number} code      状态码，0：请求成功
     * @apiSuccess {String} message   提示信息
     * @apiSuccess {Array} data       博客列表
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":[]}
     *
     *
     */
    /**
     * @param Request $request
     * @return array|string
     */
    public function like(Request $request)
    {
        DB::table('posts')->where('id', $request->route('id'))->increment('like');
        return msg(0, "");
    }

    /**
     * @api {post} /api/post/:id/comment 发布博客评论
     * @apiGroup 博客
     * @apiVersion 1.0.0
     *
     * @apiDescription 博客评论
     * 
     * @apiParam {Number} id        博客id，url参数
     * 
     * @apiParam {Number} replied    被评论的评论id，若为评论博客则为0
     * @apiParam {String} content    评论内容
     *
     * @apiSuccess {Number} code      状态码，0：请求成功
     * @apiSuccess {String} message   提示信息
     * @apiSuccess {Array} data       无关信息
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":[]}
     *
     *
     */
    public function comment(Request $request)
    {
        $comment = new Comment([
            'publisher' => session("uid"),
            'replied' => $request->input("replied"),
            'content' => $request->input("content"),
            'post_id' => $request->route("id")
        ]);

        $comment->save();

        return msg(0, "");
    }

    /**
     * @api {get} /api/post/:id/comments 博客评论列表
     * @apiGroup 博客
     * @apiVersion 1.0.0
     *
     * @apiDescription 博客评论列表
     * 
     * @apiParam {Number} id        博客id，url参数
     * 
     *
     * @apiSuccess {Number} code      状态码，0：请求成功
     * @apiSuccess {String} message   提示信息
     * @apiSuccess {Array} data       博客评论列表
     *
     * @apiSuccessExample {json} Success-Response:
     * {"code":0,"status":"成功","data":[]}
     *
     *
     */
    public function cmt_list(Request $request)
    {
        return msg(0, Comment::query()->select(
            "comments.*",
            "publisher.nickname as publisher_nickname",
            "publisher.avatar as publisher_avatar",
        )
            ->where('post_id', $request->route("id"))
            ->join("users as publisher", "comments.publisher", "=", "publisher.id")
            ->orderBy('updated_at', 'desc')->get()->toArray());
    }
}
