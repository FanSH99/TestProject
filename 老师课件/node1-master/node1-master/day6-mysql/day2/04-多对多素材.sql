/*
	多对多
	   * 如：订单 和 商品
		 * 一个商品对应多个订单，一个订单对应多个商品
		 实现方式：建立第三张表，中间表至少包含2个外键，分别关联两方主键
*/
-- 删除表
DROP TABLE IF EXISTS tb_order_goods;
DROP TABLE IF EXISTS tb_order;
DROP TABLE IF EXISTS tb_goods;

-- 订单表
CREATE TABLE  tb_order (
	id int PRIMARY KEY auto_increment,
	payment DOUBLE(10,2),
	payment_type TINYINT,
	`status` TINYINT
);
-- 商品表
CREATE TABLE  tb_goods (
	id int PRIMARY KEY auto_increment,
	title VARCHAR(100),
	price DOUBLE(10,2)
);
-- 订单商品中间表
CREATE TABLE  tb_order_goods (
	id int PRIMARY KEY auto_increment,
	order_id int,
	goods_id int,
	count int
);

-- 添加外键
ALTER table tb_order_goods add CONSTRAINT fk_order_id FOREIGN key(order_id) REFERENCES tb_order(id);
ALTER table tb_order_goods add CONSTRAINT fk_goods_id FOREIGN key(goods_id) REFERENCES tb_goods(id);



