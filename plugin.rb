# name: Alternate Topic Layout
# about: Reorder title, category slug, and topic map in a topic view
# version: 1.0
# authors: Christopher Heald
# url: https://github.com/OnceWas/discourse-alt-topic-layout
register_asset "stylesheets/alt_topic_layout.css"

Discourse::Application.routes.prepend do
  get "/custom_user_fields" => "users#custom_user_fields"
end

after_initialize do
  load File.expand_path("../models/extended_user_field_option.rb", __FILE__)
  load File.expand_path("../controllers/extended_users_controller.rb", __FILE__)
end
