export default Ember.Component.extend({
  tagName: 'div',
  layoutName: 'components/custom-fields-data',
  classNameBindings: ['custom-fields'],

  custom_fields: function() {
    var custom_fields = Ember.Object.create({
      "real_state_brokerage": "",
      "location": ""
    });

    var username = this.get('post').username;
    $.ajax({
      url: '/custom_user_fields',
      data: { user_name: username }
    }).then(function(res) {
      var real_state_brokerage = res.real_state_brokerage;
      var state                = res.province_state;
      var city                 = res.city;
      var loc                  = new Array();

      if(real_state_brokerage) {
        custom_fields.set("real_state_brokerage", real_state_brokerage);
      } else {
        custom_fields.set("real_state_brokerage", "");
      }

      if(city) {
        loc.push(city)
      }

      if(state) {
        loc.push(state)
      }
      custom_fields.set("location", loc.join(", "));
    });
    return custom_fields;
  }.property('custom_fields')
});
