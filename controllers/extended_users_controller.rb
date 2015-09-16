UsersController.class_eval do

  def custom_user_fields
    user = User.find_by(username: params[:user_name])
    ret = Hash.new
    user.user_fields.each do |cf|
      uf = UserField.find_by(id: cf.first)
      ret[uf.name.downcase.gsub(" ", "_").gsub("/","_")] = cf.last if uf
    end
    render json: ret
  end

end
