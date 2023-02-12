/*
    子查询(嵌套查询)
        分类(根据查询结果和作用的不同)：
            1.单行单列：
                作为条件值，使用 = != > < 等条件判断
                select 字段列表 from 表 where 字段名 = (子查询);
            2.单行多列
                作为条件值，使用 in 关键字进行条件判断
                select 字段名 from where 字段名 in (子查询);
            3.多行多列
                作为虚拟表
                select 字段列表 from (子查询) where 条件;
*/
-- 1. 查询工资高于猪八戒的员工信息
select *
from emp;
-- 1.1 查询猪八戒的工资
select salary
from emp
where name = '猪八戒';
-- 1.2 查询工资高于猪八戒的员工信息
select *
from emp
where salary > 3600;
-- 合并后
select *
from emp
where salary > (select salary
                from emp
                where name = '猪八戒'
);
-- 2.查询市场部和财务部的所有员工的信息
-- 2.1 查询财务部和市场部的id
select id
from dept
where name = '财务部'
   or name = '市场部';
-- 2.2 查询员工信息
select *
from emp
where dep_id in (2, 3);
-- 合并
select *
from emp
where dep_id in (select id from dept where name = '财务部' or name = '市场部');
-- 3. 查询入职日期是 '2011-11-11' 之后的员工和部门日期
select *
from emp
where join_date > '2011-11-11';
-- 作为子查询
select *
from (select * from emp where join_date > '2011-11-11') t1,
     dept
where t1.dep_id = dept.id;

















