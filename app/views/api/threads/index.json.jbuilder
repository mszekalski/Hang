@threads.each do |thread|
  json.set! thread.id do
    json.partial! 'thread', thread: thread
  end
end
