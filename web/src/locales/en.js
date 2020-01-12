export default {
	fileName: 'File Name',
	modifiedTime: 'Modified Time',
	fileSize: 'File Size',
	mainDrive: 'Main Drive',
	rootDir: 'Root',
	search: 'Search',
	save: 'Save',
	close: 'Close',
	cancel: 'Cancel',
	start: 'Start',
	fileUpload: 'File Upload',
	urlUpload: 'Upload from url',
	upload: 'Upload',
	fileToUpload: 'File to upload',
	uploading: 'Uploading...',
	serverProcessing: 'Server is processing the file now',
	bigFileUploadWarning:
		"Due to CloudFlare Workers' limitation, uploading bigfiles may randomly failed.",
	exportUrl: 'Export Download Urls',
	exportUrlIncludeSubFolders: 'Include sub-folders',
	exportUrlIncludeFileName: 'Include filenames',
	exportUrlFetchingFiles:
		'Fetching files, remaining {remainingFolderCount} folders',
	exportUrlFetchFileFailed: 'Fetch failed, reason: {reason}',
	exportUrlStats:
		'{fileCount} files in {folderCount} folders, total size: {totalDownloadSize}',
	aria2Download: 'Download with Aria2',
	aria2DownloadRecursive: 'Recursive download subfolders',
	aria2FetchingFiles:
		'Fetching files, remaining {remainingFolderCount} folders',
	aria2DownloadStats:
		'Will download {fileCount} files(in {folderCount} folders), {totalDownloadSize} in total',
	aria2DownloadProgress:
		'Adding download tasks, remaining {remainingFileCount} files',
	aria2DownloadSuccess: 'All files added',
	aria2DownloadFailed: 'Fail adding download tasks, reason: {failReason}',
	aria2FetchFileFailed: 'Fail fetching files, reason: {failReason}',
	aria2RPCSettings: 'Aria2 RPC Settings',
	aria2RPCHost: 'Host',
	aria2RPCSecure: 'HTTPS',
	aria2RPCPort: 'Port',
	aria2RPCPath: 'Path',
	aria2RPCToken: 'Token',
	aria2RPCDownloadPath: 'Download Path',
	aria2TestConnection: 'Test Connection',
	aria2Testing: 'Testing',
	aria2TestFailed: 'Connect failed, reason: {reason}',
	aria2TestSucceed: 'Connect succeed, version: {version}',
	aria2HTTPSWarning: `You're using HTTPS while aria2 still using HTTP.
		Due to browsers limitation, aria2's HTTP requests may be blocked.
		You can request aria2 via HTTPS or disabling insecure content blocking.`
}
