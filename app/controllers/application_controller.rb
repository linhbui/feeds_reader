class ApplicationController < ActionController::Base
  protect_from_forgery
  helper_method :current_user, :logged_in?
  
  def redirect_unless_logged_in?
    redirect_to new_session_url unless logged_in?
  end
  
  def logged_in?
    !!current_user
  end
  
  def current_user
    User.find_by(session_token: session[:session_token])
  end
  
  def sign_in(user)
    user.reset_session_token
    session[:session_token] =user.session_token
  end
end
