UsersController.class_eval do

  def custom_user_fields
    user = User.find_by(username: params[:user_name])
    ret = Hash.new
    user.user_fields.each do |cf|
      ufo = UserFieldOption.find_by(value: cf.last)
      if ufo
        abbreviation = ufo.abbreviation
        uf = ufo.user_field
      else
        uf = UserField.find_by(id: cf.first)
      end
      text = abbreviation.present? ? abbreviation : cf.last
      ret[uf.name.downcase.gsub(" ", "_").gsub("/","_")] = text if uf
    end
    render json: ret
  end

end
