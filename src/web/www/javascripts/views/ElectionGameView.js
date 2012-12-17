/**
 * The Election Game!
 */
OKnesset.app.views.ElectionGameView = new Ext.extend(Ext.List, {
    id: 'ElectionGameView',
    store: OKnesset.PartyStore,
    grouped: true,
    itemTpl: '<div class="partyName">{name}<div class="partySize">{number_of_seats}</div></div>',
    onItemDisclosure: true
});

Ext.reg('ElectionGameView', OKnesset.app.views.ElectionGameView);
