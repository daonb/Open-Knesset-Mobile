/**
 * The Election Game!
 */
var lists = {
    xtype: 'list',
    id: 'ElectionGameView',
    store: OKnesset.PartyStore,
    grouped: true,
    itemTpl: '<div class="partyName">{name}<div class="partySize">{number_of_seats}</div></div>',
    onItemDisclosure: true,
    flex: 1
};
var grass = {
  height: "100%",
   xtype: "panel",
   style: "background-color:green;",
   html: "Green Grass",
   flex: 4
};

var raceTrack = {
  xtype: 'panel',
  layout:  'hbox',
  items: [lists, grass],
  flex: 5
}

var question = {
   layout: "fit",
   flex: 1,
   style: "background-color:yellow",
   html: "why, why, why?",
};

var controls = {
   style: "background-color:black",
   html: "slider, next & back",
   docked: "bottom"
};


OKnesset.app.views.ElectionGameView = new Ext.extend(Ext.Container, {
  fullscreen: true,
  layout: 'vbox',
  items: [raceTrack, question, controls]
});
Ext.reg('ElectionGameView', OKnesset.app.views.ElectionGameView);
