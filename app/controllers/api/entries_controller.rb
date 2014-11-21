class Api::EntriesController < ApplicationController
  def index
    feed = Feed.find(params[:feed_id])
    render :json => feed.entries
  end
  
  def show
    entry = Entry.find(params[:id])
    render json: entry
  end
  
  private
  def entry_params
    params.
      require(:entry)
      .permit(:guid, :link, :published_at, :title, :json, :feed_id)
  end
end
