Rails.application.routes.draw do
  root 'pages#home'
  get '/guess' => 'pages#guess'
  get '/interact' => 'pages#interact'
  get '/three' => 'pages#three'
  get '/numbers' => 'pages#numbers'
  get '/calc' => 'pages#calc'
  get '/jackhammer' => 'pages#jackhammer'
end
