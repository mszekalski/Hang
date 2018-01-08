require 'test_helper'

class ChatMessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get chat_messages_new_url
    assert_response :success
  end

  test "should get create" do
    get chat_messages_create_url
    assert_response :success
  end

  test "should get destroy" do
    get chat_messages_destroy_url
    assert_response :success
  end

  test "should get index" do
    get chat_messages_index_url
    assert_response :success
  end

  test "should get show" do
    get chat_messages_show_url
    assert_response :success
  end

end
