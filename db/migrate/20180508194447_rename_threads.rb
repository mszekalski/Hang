class RenameThreads < ActiveRecord::Migration[5.1]
  def change
    rename_table :threads, :direct_threads
  end
end
