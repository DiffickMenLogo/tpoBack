export interface IWhatsup {
  _data: Data
  id: Id2
  ack: number
  hasMedia: boolean
  body: string
  type: string
  timestamp: number
  from: string
  to: string
  deviceType: string
  isForwarded: boolean
  forwardingScore: number
  isStatus: boolean
  isStarred: boolean
  fromMe: boolean
  hasQuotedMsg: boolean
  hasReaction: boolean
  vCards: any[]
  mentionedIds: any[]
  orderId: string
  token: string
  isGif: boolean
  links: any[]
}

export interface Data {
  id: Id
  viewed: boolean
  body: string
  type: string
  t: number
  notifyName: string
  from: string
  to: string
  self: string
  ack: number
  invis: boolean
  isNewMsg: boolean
  star: boolean
  kicNotified: boolean
  recvFresh: boolean
  isFromTemplate: boolean
  thumbnail: string
  pollInvalidated: boolean
  isSentCagPollCreation: boolean
  latestEditMsgKey: any
  latestEditSenderTimestampMs: any
  mentionedJidList: any[]
  groupMentions: any[]
  isVcardOverMmsDocument: boolean
  isForwarded: boolean
  labels: any[]
  hasReaction: boolean
  sellerJid: string
  message: string
  orderTitle: string
  itemCount: number
  orderId: string
  surface: number
  status: number
  token: string
  totalAmount1000: number
  totalCurrencyCode: string
  productHeaderImageRejected: boolean
  lastPlaybackProgress: number
  isDynamicReplyButtonsMsg: boolean
  isCarouselCard: boolean
  parentMsgId: any
  isMdHistoryMsg: boolean
  stickerSentTs: number
  isAvatar: boolean
  lastUpdateFromServerTs: number
  invokedBotWid: any
  bizBotType: any
  botResponseTargetId: any
  botPluginType: any
  botPluginReferenceIndex: any
  botPluginSearchProvider: any
  botPluginSearchUrl: any
  botPluginMaybeParent: boolean
  botReelPluginThumbnailCdnUrl: any
  requiresDirectConnection: any
  links: any[]
}

export interface Id {
  fromMe: boolean
  remote: string
  id: string
  _serialized: string
}

export interface Id2 {
  fromMe: boolean
  remote: string
  id: string
  _serialized: string
}
