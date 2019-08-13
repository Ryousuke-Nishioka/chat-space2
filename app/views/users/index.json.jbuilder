json.array! @users do |user|
  json.id user.id
  json.name user.name
  # json.name        message.user.name
  # json.date        message.created_at.strftime('%Y/%m/%d %R')
  # json.image       message.image.url
  # json.id          message.id
  # json.content     message.content
end
