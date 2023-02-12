-- 多表查询
select *
from emp,
     dept;

-- 笛卡尔积：有A、B两个集合，取A、B所有的组合情况。
-- 消除无效数据
-- 查询 emp 和 dept 的数据，emp.dep_id = dept.id
select *
from emp,
     dept
where emp.dep_id = dept.id;

-- 查询 emp 和 dept 的数据，emp.dep_id = dept.id
-- 隐式内连接
select *
from emp,
     dept
where emp.dep_id = dept.id;

-- 别名，自动查询
select t1.name, t1.gender, t2.name
from emp t1,
     dept t2
where t1.dep_id = t2.id;

-- 显式内连接
select *
from emp
         inner join dept on emp.dep_id = dept.id;
-- inner 可以省略
select *
from emp
         join dept on emp.dep_id = dept.id;

-- 左外连接
-- 查询 emp 表所有数据和对应部门信息
select *
from emp
         left join dept on emp.dep_id = dept.id;

-- 右外连接
-- 查询 dept 表所有数据和对应员工信息
select *
from emp
         right join dept on emp.dep_id = dept.id;
-- 等效转换写法
select *
from dept
         left join emp on emp.dep_id = dept.id;




