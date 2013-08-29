# [Magento Lazy Image Loader](http://www.cloudswork.com)
=================

Magento Lazy Image Loader will reduce the loading of the catalog list and product view page.

To get started, checkout [http://cloudswork.com](http://www.cloudswork.com)

## Quick start
* [Download the latest release.](https://github.com/cloudswork/magento-bootstrap/archive/master.zip)
* Clone the repo: `git clone git://github.com/cloudswork/magento-bootstrap.git`.
* Upload the module to your magento folder
* Open the file app/design/frontend/default/your_template_folder/catalog/product/list.phtml
* Search for: ```<img src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resi- ze(135); ?>" width="135" height="135" alt="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" />```
* Replace with: ```<img class="lazy" src="<?php echo $this->getSkinUrl('images/cloudswork/loader_40x40.gif'); ?>" data-src="<?php echo $this->helper('catalog/image')->init($_product, 'small_image')->resize(135); ?>" width="135" height="135" alt="<?php echo $this->stripTags($this->getImageLabel($_product, 'small_image'), null, true) ?>" />```
* Clear your cache in admin > system > cache management

## Authors

**Ruud van Engelenhoven**
+ [http://twitter.com/codingwizzard](http://twitter.com/codingwizzard)

**Chris Luttikhuis**

**Alex Dinca**

## Copyright and license
Copyright 2013 CloudsWork, under the GNU general public license.
