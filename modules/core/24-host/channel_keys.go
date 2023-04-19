package host

import "fmt"

const (
	KeyChannelEndPrefix      = "channelEnds"
	KeyChannelPrefix         = "channels"
	KeyChannelUpgradePrefix  = "channelUpgrades"
	KeyChannelRestorePrefix  = "restore"
	KeyUpgradeTimeoutPrefix  = "upgradeTimeout"
	KeyUpgradeSequencePrefix = "upgradeSequence"
	KeyUpgradeErrorPrefix    = "upgradeError"
)

// ICS04
// The following paths are the keys to the store as defined in https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#store-paths

// ChannelPath defines the path under which channels are stored
func ChannelPath(portID, channelID string) string {
	return fmt.Sprintf("%s/%s", KeyChannelEndPrefix, channelPath(portID, channelID))
}

// ChannelKey returns the store key for a particular channel
func ChannelKey(portID, channelID string) []byte {
	return []byte(ChannelPath(portID, channelID))
}

// ChannelCapabilityPath defines the path under which capability keys associated
// with a channel are stored
func ChannelCapabilityPath(portID, channelID string) string {
	return fmt.Sprintf("%s/%s", KeyChannelCapabilityPrefix, channelPath(portID, channelID))
}

// ChannelUpgradeErrorPath defines the path under which the ErrorReceipt is stored in the case that a chain does not accept the proposed upgrade
func ChannelUpgradeErrorPath(portID, channelID string) string {
	return fmt.Sprintf("%s/%s/%s", KeyChannelUpgradePrefix, KeyUpgradeErrorPrefix, channelPath(portID, channelID))
}

// ChannelUpgradeErrorKey returns the store key for a particular channelEnd used to stor the ErrorReceipt in the case that a chain does not accept the proposed upgrade
func ChannelUpgradeErrorKey(portID, channelID string) []byte {
	return []byte(ChannelUpgradeErrorPath(portID, channelID))
}

// ChannelRestorePath defines the path under which channel ends are stored for restoration in the event of upgrade handshake failure
func ChannelRestorePath(portID, channelID string) string {
	return fmt.Sprintf("%s/%s/%s", KeyChannelUpgradePrefix, KeyChannelRestorePrefix, channelPath(portID, channelID))
}

// ChannelRestoreKey returns the store key for a particular channel end used for restoration in the event of upgrade handshake failure
func ChannelRestoreKey(portID, channelID string) []byte {
	return []byte(ChannelRestorePath(portID, channelID))
}

// ChannelUpgradePath defines the path which stores the information related to an upgrade attempt
func ChannelUpgradePath(portID, channelID string) string {
	return fmt.Sprintf("%s/%s", KeyChannelUpgradePrefix, channelPath(portID, channelID))
}

// ChannelUpgradeKey returns the store key for a particular channel upgrade attempt
func ChannelUpgradeKey(portID, channelID string) []byte {
	return []byte(ChannelUpgradePath(portID, channelID))
}

func channelPath(portID, channelID string) string {
	return fmt.Sprintf("%s/%s/%s/%s", KeyPortPrefix, portID, KeyChannelPrefix, channelID)
}