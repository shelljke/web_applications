Ext.define('wh.view.product.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.productlist',

    title : 'Список товаров',
    store: 'Products',

    columns: [
        {header: 'Наименование',  dataIndex: 'name',  flex: 1},
        { header: 'Цена', dataIndex: 'price', flex: 1 },
         { header: 'Количество', dataIndex: 'count', flex: 1 },
          { header: 'Суммарная стоимость', dataIndex: 'sum', flex: 1 }
    ]
});