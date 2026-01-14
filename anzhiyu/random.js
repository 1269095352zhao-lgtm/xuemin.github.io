var posts=["1970/01/01/hello-world/","2026/01/14/这是一个测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };