exports.onCreateWebpackConfig = ({ stage, actions }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.(mp4|webm)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'static/videos/',
                                publicPath: '/videos/'
                            }
                        }
                    ]
                }
            ]
        }
    });
};

// Increase buffer size for LMDB
exports.onCreateNode = ({ node }) => {
    if (process.env.NODE_ENV === 'development') {
        process.env.LMDB_MAP_SIZE = '1GB';
        process.env.LMDB_MAX_READERS = '126';
    }
}; 