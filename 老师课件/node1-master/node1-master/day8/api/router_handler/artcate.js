const db = require("../db/index");

// 获取文章分类列表的处理函数
exports.getArtCates = (req, res) => {
  // 定义 SQL
  const sql = `select * from article_cate where is_delete = 0 order by id asc`;
  // 执行 SQL
  db.query(sql, (err, result) => {
    if (err) {
      return res.cc(err);
    }
    res.send({
      status: 0,
      message: "获取文章数据成功",
      data: result,
    });
  });
};

// 新增文章分类的处理函数
exports.addArticleArtCates = (req, res) => {
  // 1. 定义查询的 SQL 语句
  const sql = `select * from article_cate where name = ? or alias = ?`;
  // 2. 执行 SQL
  db.query(sql, [req.body.name, req.body.alias], (err, result) => {
    // 3. 判断 SQL 执行失败
    if (err) {
      return res.cc(err);
    }
    // 4. 判断数据的长度
    if (result.length > 0) {
      return res.cc("名称分类或分类别名被占用, 请更换后重试~");
    }
    // todo : 执行添加动作
    // 定义插入文章分类的 SQL 语句，
    const sql2 = `insert into article_cate(name, alias) values (?, ?)`;
    // 执行插入文章的 SQL 语句
    db.query(sql2, [req.body.name, req.body.alias], (err, result) => {
      if (err) {
        return res.cc(err);
      }
      if (result.affectedRows != 1) {
        return res.cc("新增文章分类失败");
      }
      res.cc("新增文章分类成功!", 0);
    });
  });
};

// 删除文章分类的处理函数
exports.deleteCateById = (req, res) => {
  // 定义 SQL
  const sql = `update article_cate set is_delete = 1 where id = ?`;
  // 执行 SQL
  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      return res.cc(err);
    }
    if (result.affectedRows != 1) {
      return res.cc("删除文章分类失败!");
    }
    res.cc("删除文章分类成功", 0);
  });
};

exports.getArtCatesById = (req, res) => {
  const sql = `select * from article_cate where id = ?`;
  // 执行 SQL
  db.query(sql, req.params.id, (err, result) => {
    if (err) {
      return res.cc(err);
    }
    if (result.length != 1) {
      return res.cc("获取文章分类数据失败");
    }
    res.send({
      status: 0,
      message: "获取文章分类数据成功~",
      data: result[0],
    });
  });
};

// 根据 id 更新文章分类的处理函数
exports.updateCateById = (req, res) => {
  // 定义 SQL
  const sql = `select * from article_cate where id <> ? and (name = ? or alias= ? )`;
  // 执行 SQL
  db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, result) => {
    if (err) {
      return res.cc(err);
    }
    if (result.length > 0) {
      return res.cc("分类名称或别名被占用");
    }
    // todo : 可以更新数据
    // 定义更新文章分类的 SQL 语句
    const sql2 = `update article_cate set ? where id = ?`;
    // 执行 SQL
    db.query(sql2, [req.body, req.body.id], (err, result) => {
      if (err) {
        return res.cc(err);
      }
      if (result.affectedRows != 1) {
        return res.cc("更新文章分类失败");
      }
      res.cc("更新文章分类成功~", 0);
    });
  });
};
