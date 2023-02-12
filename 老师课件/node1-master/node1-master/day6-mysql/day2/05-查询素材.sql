DROP TABLE IF EXISTS emp;
DROP TABLE IF EXISTS dept;
-- 创建部门表
create table dept
(
    id   int primary key auto_increment,
    name varchar(20)
);
-- 创建员工表
create table emp
(
    id        int primary key auto_increment,
    name      varchar(10),
    gender    char(1),
    salary    double,
    join_date DATE,
    dep_id    int,
    foreign key (dep_id) references dept (id)
);
-- 添加部门数据
insert into dept(name)
values ('研发部'),
       ('市场部'),
       ('财务部'),
       ('销售部');
-- 添加员工数据
insert into emp(name, gender, salary, join_date, dep_id)
values
    ('孙悟空', '男', 7200, '2013-02-24', 1),
    ('猪八戒', '男', 3600, '2010-012-02', 2),
    ('唐僧', '男', 9000, '2008-08-08', 2),
    ('白骨精', '女', 5000, '2015-10-07', 3),
    ('蜘蛛精', '女', 4500, '2011-03-14', 1),
    ('小白龙', '男', 2500, '2011-02-14', null);













