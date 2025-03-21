<?php
/*
* Plugin Name: WP React Dashboard Widget
* Plugin URI: https://wordpress.org/wp-react-dashboard-widget/
* Description: React-powered dashboard todo list
* Version: 1.0.0
* Author: Mahmudul Amin Fahim
* Text Domain: wp-react-dashboard-widget
*/

class WP_React_Dashboard_Widget {
    function __construct() {
        add_action('admin_menu', [$this, 'add_admin_menu']);
    }

    public function add_admin_menu() {
        add_menu_page(
            'Todo List', 
            'WPRTDL', 
            'manage_options',
            'wp-react-todo',
            [$this, 'render_menu_content'],
            'dashicons-list-view' 
        );
    }

    public function render_menu_content() {
        echo "<div id="wprdw-root">
        <div id='wp-react-plugin'></div>
        </div>";
    }
}

new WP_React_Dashboard_Widget();