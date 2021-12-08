import React from 'react'
import { motion } from 'framer-motion'

export default function Inicio(props) {
    return (
        <motion.div
            transition={{ duration: 0.4 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='media' />
            <div className='description'>
                <div className='description-container'>
                    <div>
                        <h1>Lorem ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Facilisis sed odio morbi quis commodo odio aenean sed. Eros in cursus turpis massa tincidunt. Nulla pharetra diam sit amet nisl suscipit. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Enim nec dui nunc mattis enim ut tellus. Vulputate dignissim suspendisse in est ante in. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Facilisis gravida neque convallis a. Dignissim suspendisse in est ante in nibh mauris. Lobortis feugiat vivamus at augue eget arcu dictum. A scelerisque purus semper eget duis at tellus. Sed vulputate mi sit amet. Egestas sed sed risus pretium quam vulputate. Mi bibendum neque egestas congue quisque egestas diam in arcu. Aliquam vestibulum morbi blandit cursus risus at. Eleifend quam adipiscing vitae proin. Sollicitudin nibh sit amet commodo nulla facilisi nullam.</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
