export default Ember.Component.extend({
  tagName: 'div',
  layoutName: 'components/custom-fields-data',
  classNameBindings: ['custom-fields'],

  custom_fields: function() {
    var custom_fields = Ember.Object.create({
      "primary_brokerage": "",
      "location": ""
    });

    var username = this.get('post').username;
    $.ajax({
      url: '/custom_user_fields',
      data: { user_name: username }
    }).then(function(res) {
      var primary_brokerage = res.primary_brokerage;
      var state             = res.province_state;
      var city              = res.city;
      var loc               = new Array();

      if(primary_brokerage) {
        custom_fields.set("primary_brokerage", primary_brokerage);
      } else {
        custom_fields.set("primary_brokerage", "");
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
