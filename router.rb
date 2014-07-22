require 'sinatra'
require 'sinatra/contrib'
require 'sinatra/config_file'

config_file 'path/to/config.yml'

get '/' do
  erb :index
end