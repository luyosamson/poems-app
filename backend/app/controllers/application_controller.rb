class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  

  #Getting/Fetching the inspirations on load
  get '/inspirations' do

    inspirations=Inspiration.all
    inspirations.to_json
  end

  #Deleting inspirations
  delete '/inspirations/:id' do
    inspirations=Inspiration.find(params [:id])
    inspirations.destroy
    inspirations.to_json
  
  end

  #Posting inspiration by an author
post '/inspirations' do
  
  inspirations=Inspiration.create(
    title:params[:title]
    category: params[:category]
    body: params[:body]
    author_id: params[:author_id]

  )
inspirations.to_json

  end

patch '/inspirations/:id' do
  inspiration=Inspiration.find(params[id])
  inspirations.update(
      title:  params[:title]
       category: params[:category]
      body: params[:body]
      author_id: params[:author_id]

  )
  inspirations.to_json

  end

end

