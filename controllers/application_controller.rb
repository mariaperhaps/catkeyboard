class ApplicationController < Sinatra::Base

  ########################
  # Configuration
  ########################
  set :app_file,  File.expand_path(File.dirname(__FILE__), '../')


  configure :test, :development do
    require 'sinatra/reloader'
    register Sinatra::Reloader
  end

end
