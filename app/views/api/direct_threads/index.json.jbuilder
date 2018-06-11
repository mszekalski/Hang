@direct_threads.each do |direct_thread|
  json.set! direct_thread.id do
    json.partial! 'direct_thread', direct_thread: direct_thread
  end
end
