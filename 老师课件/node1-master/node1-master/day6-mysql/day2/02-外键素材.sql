-- 素材：
drop table if exists dept;
-- 部门表
CREATE table dept
(
    id        int PRIMARY key auto_increment,
    dept_name varchar(20),
    addr      varchar(20)
);
drop table if exists emp;
-- 员工表
CREATE table emp
(
    id     int PRIMARY key auto_increment,
    name   varchar(20),
    age    int,
    dep_id int
);
-- 添加两个部门
INSERT into dept(dept_name, addr)
VALUES ('研发部', '广州'),
       ('销售部', '深圳');
-- 添加员工
INSERT into emp (name, age, dep_id)
VALUES ('张三', 20, 1),
       ('龙骑士', 22, 1),
       ('剑圣', 21, 1),
       ('冰女', 22, 2),
       ('白虎', 22, 2),
       ('火女', 22, 2);























