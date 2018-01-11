# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
ChatMessage.destroy_all

u1 = User.create(username: "demo-user", password: "password")

c1 = Channel.create(topic: "App Academy")
c2 = Channel.create(topic: "Full Stack Project")
c3 = Channel.create(topic: "App Academy Students")

m1 = ChatMessage.create(content: "this is a test message", user_id: u1.id, channel_id: c1.id)
