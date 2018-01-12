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
u2 = User.create(username: "dae", password: "password")
u3 = User.create(username: "allison", password: "password")
u4 = User.create(username: "cody", password: "password")
u5 = User.create(username: "matt", password: "password")


c1 = Channel.create(topic: "App Academy")
c2 = Channel.create(topic: "Full Stack Project")
c3 = Channel.create(topic: "App Academy Students")

m1 = ChatMessage.create(content: "did everyone check in?", user_id: u2.id, channel_id: c3.id)
m2 = ChatMessage.create(content: "who do you think the best TA is?", user_id: u3.id, channel_id: c3.id)
m3 = ChatMessage.create(content: "definitly dave", user_id: u5.id, channel_id: c3.id)
m3 = ChatMessage.create(content: "can someone help me out with a bug?", user_id: u5.id, channel_id: c2.id)
