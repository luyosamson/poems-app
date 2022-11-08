class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  

  #Getting/Fetching the poem on page load
  get '/poems' do

    poem=Poem.all
    poem.to_json
  end

  #Deleting poem
  delete '/poems/:id' do
    poem=Poems.find(params [:id])
    poem.destroy
    poem.to_json
  
  end

  #Posting poem by an author
post '/poems' do
  
  poem=Poems.create(
    title:params[:title]
    category: params[:category]
    body: params[:body]
    author_id: params[:author_id]

  )
poem.to_json

  end

patch '/poems/:id' do
  poem=Poems.find(params[id])
  poem.update(
      title:  params[:title]
      category: params[:category]
      body: params[:body]
      author_id: params[:author_id]

  )
  poem.to_json

  end

end
