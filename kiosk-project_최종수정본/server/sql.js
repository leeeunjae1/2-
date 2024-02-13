module.exports = {
    dessert_all: {
        query: 'select * from dessert'
    },
    beverage_all: {
        query: 'select * from beverage'
    },
    MD_all: {
        query: 'select * from MD'
    },
    tea_all: {
        query: 'select * from tea'
    },
    coffee_all: {
        query: 'select * from coffee'
    },
    add_coffee: {
        query: `insert into coffee set ?`
    },
    add_dessert: {
        query: `insert into dessert set ?;`
    },
    add_MD: {
        query: `insert into MD set ?;`
    },
    add_tea: {
        query: `insert into tea set ?;`
    },
    add_beverage: {
        query: `insert into beverage set ?;`
    },
    update_coffee_name: {
        query: `select * from coffee where name = ?`
    },
    update_dessert_name: {
        query: `select * from dessert where name = ?`
    },
    update_MD_name: {
        query: `select * from MD where name = ?`
    },
    update_tea_name: {
        query: `select * from tea where name = ?`
    },
    update_beverage_name: {
        query: `select * from beverage where name = ?`
    },
    update_coffee_price: {
        query: `update coffee set ? where ?`
    },
    update_dessert_price: {
        query: `update dessert set ? where ?`
    },
    update_MD_price: {
        query: `update MD set ? where ?`
    },
    update_tea_price: {
        query: `update tea set ? where ?;`
    },
    update_beverage_price: {
        query: `update beverage set ? where ?`
    },
    update_coffee_url: {
        query: `update coffee set ? where ?`
    },
    update_dessert_url: {
        query: `update dessert set ? where ?`
    },
    update_MD_url: {
        query: `update MD set ? where ?`
    },
    update_tea_url: {
        query: `update tea set ? where ?`
    },
    update_beverage_url: {
        query: `update beverage set ? where ?`
    },
    delete_tea_name: {
        query: `delete from tea where ?`
    },
    delete_coffee_name: {
        query: `delete from coffee where ?`
    },
    delete_beverage_name: {
        query: `delete from beverage where ?`
    },
    delete_MD_name: {
        query: `delete from MD where ?`
    },
    delete_dessert_name: {
        query: `delete from dessert where ?`
    },
    stockmanagement_all: {
        query: `select * from stockmanagement`
    },
    update_stockmanagement_cup: {
        query: `update stockmanagement set '새로운 개수' where type = cup `
    },
    update_stockmanagement_cupholder: {
        query: `update stockmanagement set '새로운 개수' where type = cupholder `
    },
    update_stockmanagement_straw: {
        query: `update stockmanagement set '새로운 개수' where type = straw `
    },
    membership_phone: {
        query: `select phone from membership`
    },
    add_membership_phone: {
        query: `insert into membership values(phone)`
    },
    membership_coupon: {
        query: `select coupon from membership`
    },
    stockmanagementcup: {
        query: `select cup from stockmanagement;`
    },
    stockmanagementcupholder: {
        query: `select cupholder from stockmanagement;`
    },
    stockmanagementstraw: {
        query: `select straw from stockmanagement;`
    },
    stockmanagementcupupdate: {
        query: `update stockmanagement set ? where id = 1;`
    },
    stockmanagementcupholderupdate: {
        query: `update stockmanagement set ? where id = 1;`
    },
    stockmanagementstrawupdate: {
        query: `update stockmanagement set ? where id = 1;`
    },
    shopping: {
        query: `select * from shoppinglist;`
    },
    addshoppinglist: {
        query: `insert into shoppinglist(id, name, price) select id,name,price from coffee where id = ?`
    },
    addshoppinglist2: {
        query: `insert into shoppinglist2(id, name, price) select id, name, price from shoppinglist`
    },
    addshoppinglist6: {
        query: `insert into shoppinglist(id, name, price) select id,name,price from beverage where id = ?`
    },
    addshoppinglist3: {
        query: `insert into shoppinglist(id, name, price) select id,name,price from dessert where id = ?`
    },
    addshoppinglist4: {
        query: `insert into shoppinglist(id, name, price) select id,name,price from tea where id = ?`
    },
    addshoppinglist5: {
        query: `insert into shoppinglist(id, name, price) select id,name,price from MD where id = ?`
    },
    success: {
        query: `truncate shoppinglist;`
    },
    showshoppinglist: {
        query: `select * from shoppinglist;`
    },
    addcoupon: {
        query: `insert into customer set phonenum = ?;`
    },
    realaddcoupon: {
        query: `update customer set freecoupon = freecoupon + 1 where phonenum = ?;`
    },
    showcoupon: {
        query: `select * from customer;`
    },
    realusecoupon: {
        query : `update customer set freecoupon = freecoupon - 10 where phonenum = ?`
    },
    canclemenu: {
        query: `DELETE FROM shoppinglist where name = ?`
    },
    daysale : {
        query: `select sum(price) from shoppinglist2`
    },
    daysalemenu : {
        query : `select name, price from shoppinglist2`
    },
    totalprice: {
        query: `select sum(price) from shoppinglist`
    },
    plus: {
        query: `insert into shoppinglist (id, name, price) select c.id, c.name, c.price
        from coffee c join tea t on c.id = t.id join dessert d on c.id = d.id join beverage b on c.id = b.id join MD m on c.id = m.id
         where c.id = ?;`
    },
    minus: {
        query: `delete from shoppinglist where id = ? limit 1;`
    },
    car: {
        query: ` INSERT INTO parkingcar SET carnumber = ?, intime = NOW(), outtime = DATE_ADD(NOW(), INTERVAL 2 HOUR)`
    },
    carinfo: {
        query: ` SELECT intime, outtime FROM parkingcar WHERE carnumber = ?`
    },
    showcustomercoupon: {
        query: `select freecoupon from customer where phonemun = ?`
    }
}