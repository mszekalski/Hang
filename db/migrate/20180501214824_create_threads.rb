class CreateThreads < ActiveRecord::Migration[5.1]
  def change
    create_table :threads do |t|
       t.timestamps
       t.integer :creator_id
    end
  end
end
