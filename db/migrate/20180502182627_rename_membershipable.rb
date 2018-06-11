class RenameMembershipable < ActiveRecord::Migration[5.1]
  def change
    rename_column :memberships, :mebershipable_id, :membershipable_id
  end
end
