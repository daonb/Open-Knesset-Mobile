Ext.regController('ElectionGame', {

	Index: function(options)
	{
		if ( ! this.electionGameView)
		{
			this.electionGameView= this.render({
				xtype: 'ElectionGameView'
			});

			this.electionGameView.addListener('itemtap',
				function(that, index, item, e) {
					var record = that.store.getAt(index);
          // TODO: does the next line has to happen every time the user taps?
					OKnesset.MemberStore.sort([OKnesset.MemberStoreSorters.partyOrdinal]);
					OKnesset.app.controllers.navigation.dispatchPanel(
                'Party/Index/' + record.data.id, options.historyUrl);
				});
		}

		getAPIData({
			apiKey:'parties',
			success: function (data){
				OKnesset.PartyStore.loadData(data);
				// that.memberView.getComponent('loading').hide();
			},
			failure: function (result){
				OKnesset.onError('SERVER', ["error receiving parties data.", result]);
			}
		});

		// don't track if the panal was reached by pressing 'back'
		if (options.pushed){
			GATrackPage('ElectionGameView', '');
		}


		this.application.viewport.query('#toolbar')[0].setTitle(OKnesset.strings.ElectionGameTitle);
		this.application.viewport.setActiveItem(this.electionGameView, options.animation);
	}
});
